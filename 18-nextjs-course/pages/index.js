import { Fragment } from "react";
import Link from "next/link";

function HomePage() {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/news/something">NestJS Is A Great FrameWork</Link>
        </li>
        <li>something else</li>
      </ul>
    </Fragment>
  );
}
export default HomePage;
