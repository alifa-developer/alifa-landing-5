interface DefaultFormActionResult {
  error?: string;
  success?: string;
  readonly redirectTo?: string;
}

const defaultFormActionResult: DefaultFormActionResult = {
  error: undefined,
  success: undefined,
  redirectTo: undefined,
};

export interface DefaultActionResult extends DefaultFormActionResult {}
export const defaultActionResult: DefaultActionResult = defaultFormActionResult;

export type DefaultActionFn = (
  _: DefaultActionResult,
  formData: FormData
) => Promise<DefaultActionResult>;



export interface ForgotPassActionResult extends DefaultActionResult {
  retryAfter: number;
}

export const defaultForgotPassActionResult: ForgotPassActionResult = {
  error: undefined,
  success: undefined,
  retryAfter: 0, 
};

export type OtpDefaultActionFn = (
  _: ForgotPassActionResult,
  formData: FormData
) => Promise<ForgotPassActionResult>;
