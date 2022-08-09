import Link from "next/link";
import { Twitter, Instagram, Facebook, LinkedIn } from "@mui/icons-material";
const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h5 className="font-medium text-lg">ارتباطات</h5>
      <p>مشهد . ایران</p>
      <p>989039175747+</p>
      <ul className="mt-5 flex  items-center gap-1">
        <li>
          <Link href="#">
            <a>
              <Twitter />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <Instagram />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <Facebook />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <LinkedIn />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
