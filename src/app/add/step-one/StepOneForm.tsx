"use client";

import Input from "@/components/Input";
import SubmitBtn from "@/components/SubmitBtn";
import { FormErrors } from "@/types";
import { stepOneFormAction } from "./actions";
import { useFormState } from "react-dom";

const initialState: FormErrors = {} 
export default function StepOneForm() {

  const [serverErrors, formAction] = useFormState(stepOneFormAction, initialState)

  return (
    <form action={formAction} className="flex flex-1 flex-col items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Input label="Name" id="name" type="text"   minLength={2}/>
        <Input
          label="Link"
          id="link"
          description="Must start with http:// or https://"
          type="text"
          required
          pattern="https?://.+"
        />
        <SubmitBtn text="Submit" />
      </div>
    </form>
  );
}
