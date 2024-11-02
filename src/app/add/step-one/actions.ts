'use server';

import { stepOneSchema } from "@/schemas";
import { FormErrors } from "@/types";

export const stepOneFormAction = (
    prevState: FormErrors | undefined,
    formData: FormData
): FormErrors | undefined => {
    const data = Object.fromEntries(formData.entries());
    const validated = stepOneSchema.safeParse(data);
    console.log(validated.error)
    return {}
    // if (!validated.success) {
    //     return { ...prevState, ...validated.error };
    // }
};
