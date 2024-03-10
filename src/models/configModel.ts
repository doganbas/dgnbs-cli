export type ApiCallModel = {
  name: string;
  swaggerFile: string;
  baseUrl: string;
  generateMockData: boolean;
  standardModelType: boolean;
};

export type ComponentGeneratorModel = {
  basePath: string;
  generateStories: boolean;
  generateTest: boolean;
  generateLocalization: boolean;
};

export type ConfigModel = {
  apiCalls?: ApiCallModel[];
  component?: ComponentGeneratorModel;
};
