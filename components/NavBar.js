import Link from "next/link"

const NavBar = () => {
  return (
    <div>
    <ul>
        <li>
            <Link   href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/requestAnImage">request an image</Link>
            <Link href="/contact">Contact</Link>
        </li>
    </ul>
    </div>
  )
}

export default NavBar