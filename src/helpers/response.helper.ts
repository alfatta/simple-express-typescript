interface APIResponse {
  status: number;
  message: string;
  data: object | Array<unknown> | null;
  meta: object | null;
}

const APIResponse = (
  status: number,
  message: string,
  data: object | Array<unknown> | null = null,
  meta: object | null = null
): APIResponse => ({
  status,
  message,
  data,
  meta,
});

export default APIResponse;
