export interface IColor {
  name: string;
  color: string;
  value: {
    band?: number;
    multiplier: number;
    tolerance?: number;
  };
}

export interface IOption {
  label: string;
  value: any;
  record?: IColor;
}

export type TOptionType = "band" | "multiplier" | "tolerance";
