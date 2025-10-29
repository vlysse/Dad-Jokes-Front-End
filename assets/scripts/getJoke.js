export async function getJoke()
{
    try{
        let request = await fetch('https://913387d7-0eb3-4599-96f0-772a3e360312-00-3vtig4shz731w.riker.replit.dev/api/dadjokes');
        let data =  await request.json();
        return data;
    } catch(error) {
        throw new Error("fetch joke Error : "+error);
    }
}