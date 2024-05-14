import React from 'react';

interface SocialHandle {
  handleName: string;
  profileLink: string;
}

interface ContactPropsType extends React.ComponentProps<'p'> {
  phoneNumber?: string;
  email?: string;
  socialHandles?: Array<SocialHandle>;
  description?: string;
}

export const Contact: React.FC<ContactPropsType> = (props) => {
  const { phoneNumber, email, socialHandles, description } = props;
  return (
    <p>
      <span>{phoneNumber ? ` ${phoneNumber} | ` : ''}</span>
      <span>
        {email ? (
          <>
            <a href={`mailto: ${email}`}>{email}</a>
            {' | '}
          </>
        ) : (
          ''
        )}
      </span>
      <span>
        {socialHandles && socialHandles.length > 0 ? (
          <span>
            {socialHandles.map(({ handleName, profileLink }, index) => (
              <span key={index}>
                <a
                  href={profileLink}
                  className="underline text-black  font-medium"
                  target="_blank"
                >
                  {handleName}
                </a>
                {`${index === socialHandles.length - 1 ? '' : ' | '}`}
              </span>
            ))}
          </span>
        ) : (
          ''
        )}
      </span>
      {description ? <span>{description}</span> : null}
    </p>
  );
};
