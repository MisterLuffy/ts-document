import { ButtonProps } from '@arco-design/web-react/es/Button/interface';

/**
 * @title B
 */
interface B extends Omit<ButtonProps, 'type'> {
  /**
   * @zh type size
   */
  type: string;
}
