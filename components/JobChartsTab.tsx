import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Board from "./Board"
import JobsList from "./JobsList"
export default function JobChartsTab() {
  return (
    <div className="py-4 pt-4 ">
      <div className="">
        <Tabs defaultValue="account">
          <TabsList className="grid grid-cols-3 gap-2 bg-zinc-200 w-full md:w-1/2 border border-gray-300">
            <TabsTrigger
              className="hover:bg-zinc-100 hover:transition-all"
              value="account"
            >
              Table List
            </TabsTrigger>
            <TabsTrigger className="hover:bg-zinc-100" value="password">
              Jobs Board
            </TabsTrigger>
            <TabsTrigger className="hover:bg-zinc-100" value="charts">
              Overview
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>List of Jobs</CardTitle>
                <CardDescription>
                  <div className="flex justify-between">
                    <span>
                      Make changes to your account here. Click save when youre
                      done.
                    </span>
                    <button className="font-semibold text-sm tracking-tight rounded-md bg-[#000000] py-2 px-3 text-white hover:bg-[#2f2f31]">
                      Add new
                    </button>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <JobsList />
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Board</CardTitle>
                <CardDescription>
                  A board where you can drag and drop jobs according to their
                  status.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Board />
              </CardContent>
              {/* <CardFooter>
                
              </CardFooter> */}
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
