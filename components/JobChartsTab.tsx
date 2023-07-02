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
export default function JobChartsTab() {
  return (
    <div className="py-4 pt-4 ">
      <div className="">
        <Tabs defaultValue="account">
          <TabsList className="grid grid-cols-3 gap-2 bg-zinc-200 w-full md:w-1/2 border border-gray-300">
            <TabsTrigger
              className="hover:bg-zinc-300 hover:transition-all"
              value="account"
            >
              Jobs Table
            </TabsTrigger>
            <TabsTrigger className="hover:bg-zinc-300" value="password">
              Jobs Board
            </TabsTrigger>
            <TabsTrigger className="hover:bg-zinc-300" value="charts">
              Overview
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card >
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when youre done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
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
