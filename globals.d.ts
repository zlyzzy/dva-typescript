declare module "*.css" {
  const content: {
    [propName: string]: any
  };
  export default content;
}

declare module "*.less" {
  const content: {
    [propName: string]: any
  };
  export default content;
}

declare module "*.json" {
  const content: object;
  export default content;
}
