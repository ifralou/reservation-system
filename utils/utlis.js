
export const useBackendServiceURL = (relative) =>
{
   console.log(process.env.BACKEND_BASE_URL) ;
   console.log(relative);
    return `${process.env.BACKEND_BASE_URL}${relative}`;
}
