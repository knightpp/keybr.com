import { clsx } from "clsx";
import { type ReactNode } from "react";
import { Avatar } from "./Avatar.tsx";
import { type BoundPageLink, PageLink } from "./pagelink.tsx";
import { type AnyUser } from "./types.ts";
import * as styles from "./UserName.module.less";

export function UserName({
  user,
  link,
}: {
  readonly user: AnyUser;
  readonly link?: BoundPageLink<any> | null;
}): ReactNode {
  const { id, name } = user;
  return (
    <span
      className={clsx(styles.userName, id == null && styles.anonymousName)}
      title={id != null ? name : "Anonymous user"}
    >
      <Avatar user={user} size="medium" className={styles.avatar} />
      {link != null ? (
        <PageLink
          link={link}
          className={clsx(styles.name, id == null && styles.anonymousName)}
        >
          {() => name}
        </PageLink>
      ) : (
        <span className={clsx(styles.name, id == null && styles.anonymousName)}>
          {name}
        </span>
      )}
    </span>
  );
}
