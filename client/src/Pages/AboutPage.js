import React, {useEffect} from 'react'

const AboutPage = () => {

    const callAboutPage = async () => {
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials:"include",
            })

            const data = await res.json();
            console.log(data);

            if(!res.status === 200) {
                throw new Error(res.error);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      callAboutPage();
    }, [])
    

    return (
    <div>AboutPage</div>
    )
}

export default AboutPage