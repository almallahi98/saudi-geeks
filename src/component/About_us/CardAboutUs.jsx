import { Center } from "@chakra-ui/react";
import React from "react";
import {
  FaGithub,
  FaGithubAlt,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import "animate.css";

function CardAboutUs() {
  return (
    <div className="AboutUsBody">
      <div id="AboutUsText">
        <div>
          <p id="aboutPTagStyle">
            We are a group of full-stack developers training in Tuwaiq Academy
            (JavaScript Bootcamp) We decided to build IoT app that help users to
            manage their devices remotely !
          </p>
        </div>
        <div id="aboutHeading">
          <h1>Meet Saudi Geeks Team </h1>
        </div>
      </div>
      <div id="Cardd">
        <div className="AbuoutCard">
          <img
            className="AboutUsImage"
            src="data:image/png;base64,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"
            alt="Avatar"
          />
          <div className="containerForCard">
            <h4>
              <b>Ayman AlAsiri</b>
            </h4>
            <p>Full-Stack developer</p>
            <p>BA of Information Systems</p>
            <p>Trainee at Tuwaiq Academy</p>
            <div>
              <a href="https://www.linkedin.com/in/ayman-alasiri-0bab63216/">
                <FaLinkedin display={"inline"}></FaLinkedin>
              </a>
            </div>
            <a href="https://github.com/AymanAsiri95">
              <FaGithub></FaGithub>
            </a>
          </div>
        </div>
      </div>
      <div id="Cardd">
        <div className="AbuoutCard">
          <img
            className="AboutUsImage"
            src="data:image/png;base64,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"
            alt="Avatar"
          />
          <div className="containerForCard">
            <h4>
              <b>Mohammed AlMallahi</b>
            </h4>
            <p>Full-Stack developer</p>
            <p>BA of Computer Science </p>
            <p>Trainee at Tuwaiq Academy</p>
            <div>
              <Center>
                <a href="https://www.linkedin.com/in/mohammed-al-mallahi/">
                  <FaLinkedin></FaLinkedin>
                  <a href="https://github.com/almallahi98">
                    <FaGithub></FaGithub>
                  </a>
                </a>
              </Center>
            </div>
          </div>
        </div>
      </div>
      <div id="Cardd">
        <div className="AbuoutCard">
          <img
            className="AboutUsImage"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAD2CAMAAABC3/M1AAAAjVBMVEX///8AAAD4+Pivr6/8/Pzn5+f5+fn09PTw8PDj4+M4ODienp60tLTGxsZERETq6uqTk5OlpaUhISHb29t8fHzOzs6JiYkZGRlYWFg+Pj4qKipubm64uLjX19eFhYVeXl5QUFASEhLBwcFpaWmYmJh0dHQxMTELCwuPj48nJydDQ0MfHx8XFxc5OTlbW1tPrHJEAAAM5klEQVR4nN1d12LiOhDFpoQaYjqhd0h29/8/78aoWMW4SDOSc8/bFmQdW5qm0Uythoe3+zUI5svLx3rTQHyMG4S3IMF1Ve/4npAV9oGCx+T45ntSpuirZJ54j34loU4qmRiL9a/bReOXZGJMxr7nVwbDbSaZH3ytfc+xKNba/k/FR+h7ovlozwpReWLb9j3bbAwnxbnEmFVYwrUv5bjEuFdVwPXKc4nR9z3vNGweZmSCYN/0PXcNH6ZcYpx9z15G+92GTBAsq2SSTu24xIh8c+BY25MJgotvFhQRBJkf87rlm0gMQ8Gs41EB06AORSYIDt4tgwEcmSCYe/46r50yI1y9kmmMYNkEO59sDMzMHNT9kTmCkwmCoTc2CGSChS8ydww2wcAPmTcUMsHID5vcwIwhvAgCpE/zo0N9sAGzzzRMPbC5orHxoEKzY7N2cG994i00H3LAMhKQCfdLDZFMELh2QwECGxnYOGaDuW2CoOeYTcnweUmcHLNZorJx7YMeUNkEjtngkgncRnIbyGzcmmpoBjSF20PeNjIbtyIam83MKZshMpuJUzZNZDZuzz+w2az+V2zc+gQpbHbb+nHTDsNWoxWGYWe6Pl/MfSC3MUKFzeT44pS8Pe2dTNjsXZIR2Vx7eflZzfXks9LfhknoW9FUs/Zx2y3Bxu2+YWxKOSLt9eWWySGBWweH2QLLsj/s1HdF2LiV0NyyMfnxuH7J20dutSe3oU0HiIVdRrTUrWUTssda5S+F42P/fjm9dz9H8/l1cbqcB/QgdQs10WJgbKDdKjrsHXjYHDDhdIQdloXpHOd4Hehjgd0qFqZznBL1TR8L7Fb9o8M6Tpdm8ghYMSAt4Dww8/gv6Kg80cXxwTTX6KCj8oshjg8LLyhseHTb8SEBT7AHTf/9y0Z1fAnkjPHcJOboNkV6yD1KSOmTpO45PccVcrkh9VwyrMN0/IYYvfgAHHghjOtMRkuWPKT6FMd1FYqWDwkBj8GUhAonOoc986s36LSnU8BzIyVN/BNu5Ne4oL25wWy73c5mMyYvXahQeDWj4+Jq55C4IHKEiDjqDoIDxDvEzutx8cpiEH2N7E213H4bZF1N/BwHwYEOuAWQgrWLBfDE80F73GcQGe0iBYIYaagZZDS3AvMRDHd8oXZ0JQRqtc3zUV3MRyzc2Wm1T2yzY+huobF45B7vASSl31E6B/Xe0dwpGlRzldS1hXZsZLy70AEJ6MdBMnHX7twBAhp+QgkTERPN6VEhCX6/YwxN/XSXJSFo4AvB9hyjjZyBFXkofBEXErstfXBvB3qKC36sT29du65FRM8mgK0P+pIcn0jXmFb4hh2UigD3lQaoxgY9Ct/4EAEEH/BKh4SEvwBHLI4HtNKJ3BpoMmimApjfRg0mt6nQCWiEFerkaOXeChBBTSqgIB791I4zBQSAKp2rW0cgBaSKHcjF5h6iXV4QHbCN61kEENyh7CqSG3IAmJIN5jA2r3cRIE3D9pydJEB6q8nBsYJQOnTB+quXwkCN+L3NGBgWrCH69obvFU7QW2Nvu9Z6kErYFjRsbLyFm6AGkjV6dsY0zdqpTNnbpY1Iou+iOkWJqUwyOtMZW65TBND3a3Ia9gfWSQLB3tQyWVRtncVgGZllDXpqBFSlWCcDjUzfyq0YqnkfSJMyB33Lpc6o2I2OKlW5paA7oEREigYDvfsBaWD1IQvTYWSQs1wMwW7mdYtpdbbMqiYBGFjG56GIZGOFi/fIkzJGUlg1fyewWxWOz51KgN8tCIJV9mrbjCpPpiaVic2wqNtJRnWlDBoJSgXfxwtrpSlmh/uNn2WB6M+dcA96pqnFltrkoxoOZwrmVACIxfwfk/qm/VxOrbfO+iOlX4nvWb8A1R+tH0mt3un+Ho1G6l38GSVdUXVDtgM5c8+tFfc15h5rFe0adphD90Ejs3fE32c2GKu4UEW5tla2QRi9qiGwYjufpjp4rdf9AmSDSxbkuJfSpWzQUH/js173C1Blo4ZtGtP+7HLaX6/L/WobTZVFxezUyjVZISe6/0r+ii7Pqvme9NOUzvWkx9pui4rkgdqb5ctutw7kl/vKdGBrcO1isJ35zbtTJfgMk1rxf0x+nyjavaf68BxhX7xwaqbVV8kAnz1/0u3tKEzEQgt+iYN85dbIwkCnJ00ihulQag3Dw9bpkmvWVyqTGKauSlpN8/3ZSffZZn/1qq+KaSr+q9Ymi94G8YSqsentMjvEmLnFma1NlrMBQoefcHD/m/VUApObBfnNjb4vdUDJMDxO5vlMDL/OOX/QJ04RwDWJ4XpSqv9gyYPlTYEPnmAX2Xyj6b18P4hriaPcYapozMT8cjRKlp6adlEqeujXKNGlVcKubNPjMPpj+KigaBTGqmj+pMT5VXaIIh+j/A17LFoc8hV2Rfn0bZ+Ue8DULNbVOBuFrk60IZ4UPLKkD1Bnhlu+OQfS3TLGy8/ThmtlkJdtAdgOrpvuq4A2NnzPMuTeYDtApCV79vN/Vgbfr9UbeAlr3TIA7J9J8YoOQu+kmyIMwHalgHQbG7i5JUUf/RGjNFMHq8OAqBbK1rwuhrTUtlLWbBkkwQ+sDkC6MjCqfl4MLDiN1/tDVdXAglMGjTIXdczKQ6nmhdwyhZTZOeA9QNZs5d2mcoiN6k3+fzOHKNdQHxQjDk7h9DalEAUBiNmciSlu8zzx4+B2gntihd1pKkr9NLNNFQ+8U9Ho1JPIGD8IE+yN5a+hQpF0s91of4NSaAMXPITBPLfk03hu6m4E5pLdyB8TGVDdZLEM8OkT8yZZaJU4Ry0NNnsS0k/MdM/TMgSzl/fxH4RzOr+zMgVPrIwV6Pp/w2ZckyoK/zZlQ8A9szj3QjCfKnjVogD4vo81TkLGdUsDIPDpL+QYmuNWIDBIojN/ZPu5CveUS0PwzRpSQKBsrlwlIMjkjpSKjVqDEwtC7GQq2DU/hpv7alL2EDTMUY6j/UYbWtAwkeyt/0azU5j+hxwaxrsRe792Y1zBr0O3hOlva9JJOl6R+U/+QGCIxw4TOZKCdt+Cqzhwc0PUlyeZDdq1eK4UwA3bujR9iQ1arwkmRuE1mqgv35WYHVT2YahIxwMd/2k7tSBFp6hhlgoboPI4dSXPm5u2z9TPMFjBKTbxEK1bk7NQQDbptKtmrXNj8PmnuJ4PWKsBUSZf+RogAKgtOXzeKZTZsJwKEn18Vic6wOg26bR2JOsb+4gaSzqT2bDcVnIuQWstLSG2j3TKfePdEwlsb45weSmxkbdN0ukUYPtICQg35dDb7tryIBlMYsM5EpEZJs+z3j5SO6NDTcmssRi4KV6QkNhI8TuJjfX2kXpYzdVjNePk8JbcG0tiw/ZmT2fzsxysMoP/iUN915TuzqY7U80GEtnwnbpJY2O3faSk4IeakGamcKZaprHIhjNtpbOxqMzRkIb5lDzpwMwnaC8CDaLiYtuG2bQt/b/fDLePnBx0rSlJySYKR8s5+z5LFpL+po4af0NzVD5/XqrpIiY+gZLVclHu4fC0N3FPtiN5cRqeUcr5bnu1/5xJZXGRzX6tSUX+BOXvx+IiN2QjJ24vtGw+Gzbzc1piKpOaKdfajlyiGrKRZdhJS4E1uNTH2Ly4UshGTo1yh3srNnJ+yErL4zDQZfzb/Evjw+PEKaosWWyGbOS5T7TUVAOfQNg3t602Z54wqP7DW12wqoDYqNcTDRSOLNO6kSwHmOmkZBMP5GRFMzbKp9hqqswgCKXpm51gUfDxReugqWV3mRnvyjaZaalJBi9pnHKrjfPh2yY5hmykJJCZ2TaKerlrbIwKF+jJtPxLMO0sKDLdTtsZXo9WDJkP1iMhgVH87k29TcHZsO8geLUqm4dxvSHFATjXVHfNtEZGRxb9jA03cgVZqbCxqDGifIme3MM5hnEQ6ihuHzZFvk+FlySx2doEJJWp97SvZfOqzvoozJASa1wIbEw3DEGKdlGTh22CUElhNMaGXdsXBT9nY75hCFTNH6m9rm3LNHfkgjt824jeGGNjXZRHtZijmup8WnefOT6EmXKbVnTfCJuZfQRfVQyR6iIEAJlQUcKG6XypZHrMxm7DUKjLKtL0KUQN7XDC2HTpmNLlvzD4hKlop9oUvRQrC6JBYIfIeR6EkFyFEKqKlXo5KY0NYHU2XtYBJfNNu5jykcIG8GCaSRic5pmquomVi8YGsLnu+3wU44CTmqxdf9im3IqqUr32TKR9B/2Ol+9ZFoWmW05p95Z9z7IotIuD27R7npWrm/cCmgsbS34tvu+uI60dtM8QO+va8qteicZUaEcNz0wUbalVs865Bu2SOvkK6q3SilaeVaGKLxbEUoTDX6+TLAzFXD5w60k2rX03PSsIedJdwRQcdMV/+R3JqlJAQzmA6EQnXhvtd9yOOLCltLgzd+k/NReeXT5BZzcAAAAASUVORK5CYII="
            alt="Avatar"
          />
          <div className="containerForCard">
            <h4>
              <b>Ahmed AlSaif</b>
            </h4>
            <p>Full-Stack developer</p>
            <p>BA of</p>
            <p>Trainee at Tuwaiq Academy</p>
            <a href="https://www.linkedin.com/in/ahmad-alsaif/">
              <FaLinkedin></FaLinkedin>
              <a href="https://github.com/alsaif1991">
                <FaGithub></FaGithub>
              </a>
            </a>
          </div>
        </div>
      </div>
      <div id="Cardd">
        <div className="AbuoutCard">
          <img
            className="AboutUsImage"
            src="data:image/png;base64,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"
            alt="Avatar"
          />
          <div className="containerForCard">
            <h4>
              <b>Mohammed Bagabas</b>
            </h4>
            <p>Full-Stack developer</p>
            <p>BA of Computer Science</p>
            <p>Trainee at Tuwaiq Academy</p>
            <a href="https://www.linkedin.com/in/ayman-alasiri-0bab63216/">
              <FaLinkedin></FaLinkedin>
              <a href="https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D8%AF-%D8%A8%D8%A7%D9%82%D8%A8%D8%B5-5a37101b2/">
                <FaGithub></FaGithub>
              </a>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardAboutUs;
