import fs from 'fs';


const LoginPage = React.lazy(()=> import('..dir/login'));

const App = ()=>{
    return(
        <>
        <Suspense fallback={<div>Loading...</div>}>
        <LoginPage/>
        </Suspense>
        </>
    )
}