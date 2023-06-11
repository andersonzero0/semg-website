import './style.css'
import { Mail } from 'lucide-react'

export default function Header() {
    return (
        <header className='header'>
            <div>
                <img className="logo" src="./logo.svg"/>
            </div>

            <a className='email' href="mailto:semgseguranca@gmail.com">Entre em contato: <Mail/></a>
        </header>
    )
}