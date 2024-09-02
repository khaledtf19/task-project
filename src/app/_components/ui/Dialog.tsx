import { Button } from "./Button";

export function SucessDialogContent({ close }: { close: () => void }) {
  return (
    <div className="bg-white w-full md:w-96 h-64 p-6 flex flex-col gap-5 justify-between">
      <h1 className="text-2xl text-green-500 text-center font-bold">
        Login Successful
      </h1>
      <Button onClick={close}>Close</Button>
    </div>
  );
}
export function FaildDialogContent({ close }: { close: () => void }) {
  return (
    <div className="bg-white w-full md:w-96 h-64 p-6 flex flex-col gap-5 justify-between">
      <h1 className="text-2xl text-red-500 text-center font-bold">
        Login Failed
      </h1>
      <p className="text-center">Please check your credentials</p>
      <Button onClick={close}>Close</Button>
    </div>
  );
}
