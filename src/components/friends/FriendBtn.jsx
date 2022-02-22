import { Show } from "solid-js";
import { RiSystemLoader4Fill } from 'solid-icons/ri'
export default function FriendBtn(props) {
  return (
    <button
      className="font-semibold py-2 w-full flex items-center  justify-center space-x-2 rounded-lg text-sm disabled:bg-gray-200 disabled:text-gray-600 disabled:dark:bg-gray-600"
      classList={{
        "text-blue-500 bg-blue-100 hover:bg-blue-200":
          props.color === "primary",
        "text-green-500 bg-green-100 hover:bg-green-200":
          props.color === "success",
        "text-red-500 bg-red-100 hover:bg-red-200": props.color === "danger",
      }}
      disabled={props.isLoading}
      onClick={[props.onClick]}
    >
      <Show
        when={!props.isLoading}
        fallback={<RiSystemLoader4Fill className="text-xl animate-spin" />}
      >
        {props.children}
        <span>{props.text}</span>
      </Show>
    </button>
  );
}