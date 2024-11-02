"use client";

import Input from "@/components/Input";
import SubmitBtn from "@/components/SubmitBtn";

export default function StepTwoForm() {
  return (
    <form className="flex flex-1 flex-col items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px] ">
        <Input label="Cupon code" id="code" type="text" minLength={5} required />
        <Input
          label="Discount (%)"
          id="discount"
          type="number"
          required
          min={1}
          max={100}
        />
        <SubmitBtn text="Submit" />
      </div>
    </form>
  );
}
