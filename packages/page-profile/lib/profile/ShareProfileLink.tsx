import { type NamedUser } from "@keybr/pages-shared";
import {
  Button,
  Field,
  FieldList,
  Icon,
  styleWidthExtraWide,
  TextField,
  type TextFieldRef,
  useClipboard,
} from "@keybr/widget";
import { mdiContentCopy, mdiOpenInNew } from "@mdi/js";
import { type ReactNode, useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";

export function ShareProfileLink({
  user,
}: {
  readonly user: NamedUser;
}): ReactNode {
  const { formatMessage } = useIntl();
  const textFieldRef = useRef<TextFieldRef>(null);
  const { copyText } = useClipboard();

  const url = new URL(window.location.href);
  url.pathname = `/profile/${user.id}`;
  const href = String(url);
  const target = `/profile/${user.id}`;

  return (
    <FieldList>
      <Field>
        <FormattedMessage
          id="profile.control.shareText"
          description="Share profile text."
          defaultMessage="Share your profile:"
        />
      </Field>
      <Field>
        <TextField
          ref={textFieldRef}
          className={styleWidthExtraWide}
          value={href}
          onFocus={() => {
            const { current } = textFieldRef;
            if (current != null) {
              current.select();
            }
          }}
        />
      </Field>
      <Field>
        <Button
          icon={<Icon shape={mdiContentCopy} />}
          label={formatMessage({
            id: "profile.control.shareButtonLabel",
            description: "Button label.",
            defaultMessage: "Copy",
          })}
          title={formatMessage({
            id: "profile.control.shareButtonTitle",
            description: "Button title.",
            defaultMessage: "Copy profile link to the clipboard.",
          })}
          onClick={() => {
            const { current } = textFieldRef;
            if (current != null) {
              current.select();
              copyText(href);
            }
          }}
        />
      </Field>
      <Field>
        <Button
          icon={<Icon shape={mdiOpenInNew} />}
          href={href}
          target={target}
          label={formatMessage({
            id: "profile.control.visitButtonLabel",
            description: "Button label.",
            defaultMessage: "Visit",
          })}
          title={formatMessage({
            id: "profile.control.visitButtonTitle",
            description: "Button title.",
            defaultMessage: "Visit your public profile page.",
          })}
        />
      </Field>
    </FieldList>
  );
}
