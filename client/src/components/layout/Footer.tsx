import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <a className="text-xl font-bold tracking-tight mb-4 block">SVLC</a>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering the next generation of technology leaders in Silicon Valley through connection, education, and mentorship.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Mentorship</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Silicon Valley Leadership Community. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}