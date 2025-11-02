import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-background shadow-md">
      <h1 className="text-xl font-bold">Boyzset.</h1>
      <ul className="flex gap-6 text-sm items-center">
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="#"><Button variant={"default"} size={"sm"}>About me</Button></a></li>
    </ul>
    </nav>
  )
}
