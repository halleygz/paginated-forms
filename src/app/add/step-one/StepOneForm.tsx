"use client";

import Input from "@/components/Input";
import SubmitBtn from "@/components/SubmitBtn";

export default function StepOneForm() {
  return (
    <form className="flex flex-1 flex-col items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Input label="Name" id="name" type="text" required />
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
