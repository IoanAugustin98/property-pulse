import Link from "next/link";

export const metadata = {
    title: 'HomePage | PropertyPulse'
};

const HomePage = () => {
  return (
    <div>
        <h1 className="text-3xl">Welcome</h1>
        <Link href="\properties">Show properties</Link>
    </div>
  )
}

export default HomePage