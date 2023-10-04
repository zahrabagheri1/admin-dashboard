import { Form, useLoaderData } from "react-router-dom";
import { getContact } from "../contacts";


export async function loader({ params }){
    const contact = await getContact(params.contactId);
    return { contact };
}


export default function Contact() {
    const { contact } = useLoaderData();

    // const contact = {
    //     first: "Pashmak",
    //     last: "Partizani",
    //     avatar: "https://placekitten.com/g/200/200",
    //     twitter: "P-like-pashmak",
    //     notes: "what do you think about me I'm your King.",
    //     favorite: true,
    // };

    return(
        <div id="contact">
            <div>
                <img key={contact.avatar} src={contact.avatar || null} />
            </div>
            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <>
                        {contact.first} {contact.last}
                        </>
                    ):(
                        <i>No name</i>
                    )}{''}
                    <Favorite contact={contact}/>
                </h1>

                {contact.twitter && (
                    <p>
                        <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
                            {contact.twitter}
                        </a>
                    </p>
                )}

                {contact.notes && <p> {contact.notes}</p>}

                <div>
                    <Form action="edit">
                        <button type="submit">Edit</button>
                    </Form>
                    <Form method="post" action="destroy" onSubmit={(event) => {if (!confirm("Please confirm you want to delete this record.")){event.preventDefault();}}}>
                        <button type="submit">Delete</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}


function Favorite({contact}) {
    let favorite = contact.favorite;
    return (
        <Form method="post">
            <button name="favorite" value={favorite ? "false" : "true"} aria-label={favorite ? "Remove from favorites": "Add tp favorites"}>
                {favorite ?  "★" : "☆"}
            </button>
      </Form>
    )
}



