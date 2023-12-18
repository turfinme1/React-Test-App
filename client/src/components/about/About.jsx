import { Flex } from "antd";

import styles from "./About.module.css";

export default function About() {
  return (
    <Flex className={styles.aboutWrapper}>
      <h2>What we offer</h2>
      <Flex className={styles.sections}>
        <Flex className={styles.offers}>
          <h3>Winner coaches</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Flex>

        <Flex className={styles.offers}>
          <h3>Affordable price</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Flex>

        <Flex className={styles.offers}>
          <h3>Modern Equipment</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Flex>
      </Flex>

      <Flex className={styles.picturesContainer}>
        <Flex className={styles.picture}>
          <img
            src="https://thumbs.dreamstime.com/b/men-pushup-together-fitness-floor-high-five-synergy-motivation-gym-body-health-personal-trainer-support-291485416.jpg"
            alt="gym"
          />
        </Flex>
        <Flex className={styles.picture}>
          <img
            src="https://business.nextdoor.com/hubfs/Starting%20a%20Gym.jpg"
            alt="gym"
          />
        </Flex>
        <Flex className={styles.picture}>
          <img
            src="https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23744.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais"
            alt="gym"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
