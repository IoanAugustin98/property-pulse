import '@/assets/styles/global.css';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'PropertyPulse | Find the perfect rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rentals, find properties'
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <Navbar />
            <mail>{ children }</mail>
        </body>
    </html>
  )
}

export default MainLayout