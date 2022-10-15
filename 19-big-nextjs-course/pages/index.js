import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return <Fragment>
    <Head>
      <title>React Meetup</title>
      <meta name="description" content="Browse a huge list of highly active React meetup!"></meta>
    </Head>
    <MeetupList meetups={props.meetups} />;
  </Fragment>
};

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://eliomar:vsFFCuviPGDcRtjX@cluster0.6zpjh.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
