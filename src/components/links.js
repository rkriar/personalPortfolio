import React from "react"

import Resume from '../Data/Resume_Ramneek_Riar.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export default function Links() {
  return (
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item">
        <a
          href="mailto:ramneek.kaur@ryerson.ca"
          target="_blank"
          rel="noreferrer"
          alt="email link"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li className="list-group-item">
        <a
          href="https://github.com/rkriar"
          target="_blank"
          rel="noreferrer"
          alt="github link"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li className="list-group-item">
        <a
          href="https://linkedin.com/ramneekriar"
          target="_blank"
          rel="noreferrer"
          alt="linkedin link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li className="list-group-item">
        <a
          href={Resume}
          target="_blank"
          without rel="noopener noreferrer"
          alt="ramneek riar resume"
        >
          <FontAwesomeIcon icon={faFile} />
        </a>
      </li>
    </ul>
  )
}