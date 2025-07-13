// 'use client';
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const RouteLoader = ({ children }) => {
//     const pathname = usePathname();
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         setLoading(true);

//         // Simulate delay for visual feedback — you can remove this in production
//         const timeout = setTimeout(() => {
//             setLoading(false);
//         }, 500); // Adjust time if needed

//         return () => clearTimeout(timeout);
//     }, [pathname]);

//     return (
//         <>
//             {loading && (
//                 <div className="fixed top-0 left-0 z-[9999] w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-sm">
//                     <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
//                 </div>
//             )}
//             {children}
//         </>
//     );
// };

// export default RouteLoader;
// app/Reusable/RouteLoader.jsx
'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RouteLoader({ children }) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // start loading on route change

        const timeout = setTimeout(() => {
            setLoading(false); // simulate loading finish after 500ms
        }, 500); // adjust as needed

        return () => clearTimeout(timeout); // cleanup
    }, [pathname]);

    if (loading) {
        return (
            <div className="fixed top-0 left-0 z-[9999] w-full h-full flex items-center justify-center bg-[#110f27]  backdrop-blur-sm">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
            </div>

        );
    }

    return children;
}
