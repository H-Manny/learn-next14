import SideNav from '@/app/ui/dashboard/sidenav';


/**
 * Renders a layout component with a side navigation bar and a main content area.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The content to be rendered in the main area.
 * @return {JSX.Element} The rendered layout component.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}