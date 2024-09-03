import { ProfileType } from "@/types";

export default function Profile({ profileData }: { profileData: ProfileType }) {
  return (
    <div className="grid grid-cols-2 w-full gap-4">
      <Datafield lable="First Name" data={profileData.first_name} />
      <Datafield lable="Last Name" data={profileData.last_name} />
      <Datafield lable="Mobile Number" data={profileData.phone} />
      <Datafield lable="Email" data={profileData.email} />
      <Datafield lable="Date of Birth" data={"July 14, 1995"} />
      <Datafield lable="Maridal Status" data={"Single"} />
      <Datafield lable="Gender" data={"Male"} />
      <Datafield lable="Nationality" data={"Egypt"} />
      <Datafield lable="Address" data={"Maadi"} />
      <Datafield lable="City" data={"Cairo"} />
      <Datafield lable="State" data={"Cairo"} />
      <Datafield lable="Zip Code" data={"12345"} />
      <Datafield lable="Work's Hours" data={"180 hours"} />
      <Datafield lable="Salary/hour" data={"300 EGP"} />
    </div>
  );
}

function Datafield({ lable, data }: { lable: string; data: string }) {
  return (
    <div className="flex flex-col">
      <p className="text-gray-500">{lable}</p>
      <p className="text-black">{data}</p>
      <hr className="border-slate-200" />
    </div>
  );
}
