import { differenceInYears } from 'date-fns';
import { FieldValues, Path, UseFormSetError } from 'react-hook-form';
import { ZodIssue } from 'zod';

export function calculateAge(dob: Date) {
  return differenceInYears(new Date(), dob);
}

export function handleFormServerErrors<TFieldValues extends FieldValues>(
  // サーバーから返されたエラー情報を含むオブジェクト
  errorResponse: { error: string | ZodIssue[] },
  // React Hook FormのsetError関数
  setError: UseFormSetError<TFieldValues>,
) {
  // エラーが配列（複数のフィールドエラー）かどうかを判断
  if (Array.isArray(errorResponse.error)) {
    errorResponse.error.forEach((e) => {
      // ネストされたフィールド名を生成（例：'user.name'）
      const fieldName = e.path.join('.') as Path<TFieldValues>;
      // 該当フィールドにエラーメッセージを設定
      setError(fieldName, { message: e.message });
    });
  } else {
    // エラーが文字列の場合、ルートレベルのエラーとして設定
    setError('root.serverError', { message: errorResponse.error });
  }
}
