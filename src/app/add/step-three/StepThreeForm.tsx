'use client';

import Input from "@/components/Input";
import SubmitBtn from "@/components/SubmitBtn";

export default function StepThreeForm() {
  return (
    <form className="flex flex-1 flex-col items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Input label="Contact Name" id="contactName" type="text" minLength={5} required />
        <Input
          label="Contact Email"
          id="contactEmail"
          type="email"
          required
        />
        <SubmitBtn text="Submit" />
      </div>
    </form>
  );
}
