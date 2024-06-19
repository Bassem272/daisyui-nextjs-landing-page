// src/containers/Navlinks.js
import Link from 'next/link'
import LanguageSwitcher from '@/components/LanguageSwitcher'

function Navlinks(){
    return(
        <>
            {/* <li className="mr-2"><Link href="/features">Features</Link></li> */}
            <li className="mr-2"><Link href="/pricing">Pricing</Link></li>
            <li className="mr-2"><Link href="/blogs">Blogs</Link></li>
            <li className="mr-2"><Link href="/articles">Articles</Link></li>
            <li className="mr-2"><Link href="/jobs">Jobs</Link></li>
            <li className="mr-2"><Link href="/videos">Videos</Link></li>
            <li className="mr-2"><Link href="/contact-us">Contact Us</Link></li>
            <li className="mr-2"><Link href="/start-designing">Start Designing</Link></li>
            <li className="mr-2"><LanguageSwitcher /></li>
        </>
    )
}

export default Navlinks