import React from 'react';

import styles from './About.module.scss';

const Component = () => (
  <div id="about-beverider" className={styles.root}>
    <h2 className={styles.h2}>about</h2>
    <p className={styles.about}>
        Unexpected guests? A party without the need of dressing up and going out? Your pizzeria doesn&apos;t offer anything fancy to drink?<br />YOU can solve it with minimal effort!<br />Just choose from our colorful range of all-kind beverages, make an order and we&apos;ll take care of the rest. Our &quot;bartender on wheels&quot; will deliver to you all the necessary (and extra!) ingredients and recipes. Just mix and have fun!
    </p>
  </div>
);

export { Component as About };
