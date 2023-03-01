import React, { useEffect, useState } from 'react';
import { getProfileAll, getThing } from '@inrupt/solid-client';
import utilStyles from '../../styles/utils.module.css';

export default function Members() {
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');

  async function getProfile() {
    const profile = await getProfileAll(
      'https://jonwilson.solidcommunity.net/profile/card#me'
    );
    const webIDProfileSolidDataset = profile.webIdProfile;
    const webIdThing = getThing(
      webIDProfileSolidDataset,
      'https://jonwilson.solidcommunity.net/profile/card#me'
    );
    setPicture(
      webIdThing.predicates['http://www.w3.org/2006/vcard/ns#hasPhoto']
        .namedNodes
    );
    setName(
      webIdThing.predicates['http://www.w3.org/2006/vcard/ns#fn'].literals[
        'http://www.w3.org/2001/XMLSchema#string'
      ]
    );
  }
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <section className={utilStyles.headingXl}>
        <p>Members.</p>
      </section>
      {picture === '' ||
        (name === '' && <Typography variant="h5">Loading</Typography>)}
      {picture !== '' && name !== '' && (
        <>
          <img src={picture} alt="profile image" width="200" />
          <p>{name}</p>
        </>
      )}
    </>
  );
}
