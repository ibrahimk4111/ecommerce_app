import Navbar from '@/components/navbar/navbar';
import '../globals.css'

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
      <div>
        <Navbar />
        {children}
      </div>
  );
};

export default AuthLayout;
