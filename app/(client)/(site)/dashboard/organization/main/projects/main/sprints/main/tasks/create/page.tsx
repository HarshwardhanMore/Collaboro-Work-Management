"use client";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




import { useState } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import OrganizationLayout from "@/components/custom/layouts/organization";
import { useSearchParams } from "next/navigation";
// import DatePicker from "react-datepicker";
// import DateTimePicker from 'react-datetime-picker';



const page = () => {
  
  const searchParams = useSearchParams();
  const organizationId = searchParams.get("organizationId")!;
  const projectId = searchParams.get("projectId")!;
  const sprintId = searchParams.get("sprintId")!;
  
  console.log(organizationId);

  const { toast } = useToast();
  const { userId } = useAuth();
  
  const [data2, setData2] = useState({
    formPerson: userId,
    toPerson: "",
    priority: "",
    startDate: new Date(),
    dueDate: null,
    name: "",
    description: "",
    organizationId: organizationId,
    projectId: projectId,
    sprintId: sprintId
  });

  const sendData2 = async (e: any) => {
    e.preventDefault();
    axios
      .post("/api/tasks/create", data2)
      .then(() =>
        toast({
          title: "Success!",
          description: "Task Has Been Added!"
        })
      )
      .catch((e: any) =>
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request."+e,
        })
      );
  };

  const printData = () => {
    console.log(data2);
  }
  console.log(data2);

  const sendData = (e) => {
    e.preventDefault();
  };

  const handleDateChange1 = (date: any) => {
    setData2({
      ...data2,
      startDate: date,
    });
  };
  const handleDateChange2 = (date: any) => {
    setData2({
      ...data2,
      dueDate: date,
    });
  };



  return (
    <OrganizationLayout>
      <div className=" w-full h-full grid grid-cols-2">
        <div className=" w-full h-full flex items-center">
          <img src="/image.jpg" alt="Image" className=" w-full" />
        </div>
        <form
          onSubmit={sendData2}
          // onSubmit={printData}
          className=" w-full h-full flex justify-center"
        >
          
          <div className=" h-full flex flex-col items-start py-4 w-3/5 ">
            
            
            <div className=" flex w-full my-4">
              <BusinessIcon />
              <select name="" title="" placeholder="Assign Task To" id="" onChange={(e)=>{setData2({...data2, toPerson: e.target.value})}} className="w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2">
                <option value="" disabled selected>Assign Task To </option>
                <option value="red">employee1</option>
              </select>
            </div>

            <div className=" flex w-full my-4">
              <BusinessIcon />
              <select name="" title="Priority" id="" onChange={(e)=>{setData2({...data2, priority: e.target.value})}} className="w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2">
                <option value="" disabled selected>Assign Priority</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="green">green</option>
              </select>
            </div>

            <div className="flex w-full my-4">
              <BusinessIcon />
              <label className=" w-full ml-1 px-2 py-2 text-sm outline-none ring-0 transition-all mr-2">Pick Start Date
                <DatePicker
                  id="startDate"
                  placeholder="Pick Start Date"
                  selected={data2.startDate}
                  onChange={handleDateChange1}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="w-full ml-1 px-2 py-2 text-sm border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
                />
              </label>
            </div>

            <div className="flex w-full my-4">
              <BusinessIcon />
              <label className=" w-full ml-1 px-2 py-2 text-sm outline-none ring-0 transition-all mr-2">Pick Due Date &nbsp;
                <DatePicker
                  id="dueDate"
                  placeholder="Pick Due Date"
                  selected={data2.dueDate}
                  onChange={handleDateChange2}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="w-full ml-1 px-2 py-2 text-sm border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
                />
              </label>
            </div>
            

            <div className=" flex w-full my-4">
              <BusinessIcon />
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name of Task"
                required
                value={data2.name}
                onChange={(e) => setData2({ ...data2, name: e.target.value })}
                className=" w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
              />
            </div>
            <div className=" flex w-full">
              <DescriptionIcon />
              <textarea
                id="description"
                name="description"
                // type="text"
                placeholder="Description"
                required
                value={data2.description}
                onChange={(e) =>
                  setData2({ ...data2, description: e.target.value })
                }
                className=" w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
              />
            </div>
            {/* <div className=" flex w-full my-4">
              <BusinessIcon />
              <input
                id="priority"
                name="priority"
                type="text"
                placeholder="Assign Priority"
                required
                value={data2.priority}
                onChange={(e) =>
                  setData2({ ...data2, priority: e.target.value })
                }
                className=" w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
              />
            </div> */}
            
            {/* <div className=" flex w-full">
              <DescriptionIcon />
              <input
                id="duedate"
                name="duedate"
                // type="text"
                type="date"
                placeholder="Due Date"
                required
                value={data2.dueDate}
                onChange={(e) =>
                  setData2({ ...data2, dueDate: e.target.value })
                }
                className=" w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black transition-all mr-2"
              />
            </div> */}
            {/* <div className=" flex w-full">
              <DescriptionIcon />
               <DatePicker selected={new Date()} onChange={(e:any) => setData2({...data2, dueDate: e.target.value})} />
            </div> */}
            <Button
              type="submit"
              variant="default"
              className=" bg-black text-white self-end my-4"
            >
              Create
            </Button>
          </div>
        </form>
      </div>
    </OrganizationLayout>
  );
};

export default page;
