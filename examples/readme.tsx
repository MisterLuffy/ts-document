import { useState, useEffect, useRef } from 'react';

interface IUseTableOptions {
  dataSource: Record<string, any>[];
  loading: boolean;
  current: number;
  pageSize: number;
  total: number;
}

interface IGetDataSourceParams {
  current: number;
  pageSize: number;
  filters: Record<string | number | symbol, string[]>;
  sorter: any;
}

interface IGetDataSourceResp {
  list: Record<string, any>[];
  total: number;
}

const defaultOptions: IUseTableOptions = {
  dataSource: [],
  loading: false,
  current: 1,
  pageSize: 10,
  total: 0,
};

/**
 * @title useArcoTable
 */
type UseArcoTable = (
  /**
   * @zh 请求函数
   * @defaultValue 'default' (可选，参数的默认值)
   */
  fn: (p: IGetDataSourceParams) => Promise<IGetDataSourceResp>,
  /**
   * @zh 参数
   */
  options: IUseTableOptions,
  /**
   * @zh 是否初始请求
   * @defaultValue 'true' (可选，参数的默认值)
   */
  startRequest: boolean
) => any;
