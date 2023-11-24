"use client";
import { useSearchParams } from 'next/navigation';
import Layout from '../(components)/layout';
import { Button } from '@/components/ui/button';
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';
import { useAuth } from '@clerk/nextjs';
import { useState } from 'react';

function page() {

  const searchParams = useSearchParams();
  const data = JSON.parse(searchParams.get("data")!);

  const { toast } = useToast();
  const { userId } = useAuth();
  
  const [data2, setData] = useState({
    id: data.id,
    active: data.active,
    isComplete: data.isComplete,
    bugs: "",
    documentation: "",
    feedback: ""
  });

  const sendData = async (e: any) => {
    e.preventDefault();
    axios
      .post("/api/tasks/update", data2)
      .then(() =>
        toast({
          title: "Success!",
          description: "Task Has Been Updated!"
        })
      )
      .catch((e: any) =>
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request."+e,
        })
      );
  };

  console.log(data2);

  
  return (
    <Layout>
      <div className=" w-full h-full grid grid-cols-2">
        <div className=" w-full h-full flex items-center">
          <img src="/image.jpg" alt="Image" className=" w-full" />
        </div>
        <form
          onSubmit={sendData}
          // onSubmit={printData}
          className=" w-full h-full flex justify-center"
        >
          
          <div className=" h-full flex flex-col items-start py-4 w-3/5 ">
            
            <div className=' w-full text-3xl font-extrabold mb-4'>Update Task</div>
            <hr className=' w-full mb-4'/>

            <div className=" flex w-full my-4">
              {/* <DescriptionIcon /> */}
              
              <input
                id="active"
                name="active"
                type="checkbox"
                // placeholder="Add Bugs"
                // required
                checked={data2.active}
                onChange={(e) =>
                  setData({ ...data2, active: e.target.checked })                  
                }
                className=" ml-1 mx-2 text-sm  border-b-2 outline-none ring-0 focus:border-black mr-2"
              />
              <label htmlFor="active">Deactivate the Task?</label>
            </div>
            <div className=" flex w-full mb-4">
              {/* <DescriptionIcon /> */}
              
              <input
                id="isComplete"
                name="isComplete"
                type="checkbox"
                // placeholder="Add Bugs"
                // required
                checked={data2.isComplete}
                onChange={(e) =>
                  setData({ ...data2, isComplete: e.target.checked })
                }
                className="  ml-1 mx-2 text-sm  border-b-2 outline-none ring-0 focus:border-black mr-2"
              />
              <label htmlFor="isComplete">Mark as Done?</label>
            </div>
            <div className=" flex w-full">
              <DescriptionIcon />
              <textarea
                id="bugs"
                name="bugs"
                // type="text"
                rows={8}
                placeholder="Add Bugs (optional). You can add Google Doc link here with public view access.\n Is case of not applicable, Leave as it is."
                value={data2.bugs}
                onChange={(e) =>
                  setData({ ...data2, bugs: e.target.value })
                }
                className=" w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black mr-2"
              />
            </div>
            <div className=" flex w-full">
              <DescriptionIcon />
              <textarea
                id="documentation"
                name="documentation"
                // type="text"
                rows={8}
                placeholder="Add Documentation (optional). You can add Google Doc link here with public view access.\n Is case of not applicable, Leave as it is."
                value={data2.documentation}
                onChange={(e) =>
                  setData({ ...data2, documentation: e.target.value })
                }
                className=" w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black mr-2"
              />
            </div>
            <div className=" flex w-full">
              <DescriptionIcon />
              <textarea
                id="feedback"
                name="feedback"
                // type="text"
                rows={8}
                placeholder="Add Feedback (optional). You can add Google Doc link here with public view access.\n Is case of not applicable, Leave as it is."
                value={data2.feedback}
                onChange={(e) =>
                  setData({ ...data2, feedback: e.target.value })
                }
                className=" w-full ml-1 px-2 py-2 text-sm  border-b-2 outline-none ring-0 focus:border-black mr-2"
              />
            </div>
            
            <Button
              type="submit"
              variant="default"
              className=" bg-black text-white self-end my-4"
            >
              Update
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default page