import { createResource, Match, Switch } from "solid-js";
import PostCard from "../../components/posts/PostCard";
import PostCardSkeleton from "../../components/posts/PostCardSkeleton";
import Error from "../../components/shared/Error";
import { fetchFriendsPosts } from "../../services/post.service";
export default function Friendsposts() {
  const [response, { refetch }] = createResource(fetchFriendsPosts);

  return (
    <Switch>
      <Match when={response.loading}>
        <PostCardSkeleton />
      </Match>
      <Match when={response.error}>
        <Error name="Error" />
      </Match>

      <Match when={response().data.data.posts.length === 0}>
        <Error error="empty" name="No Posts" message="No any posts available" />
      </Match>
      <Match when={response().data.data.posts}>
        <div className="max-w-lg mx-auto">
          <ul className="grid grid-cols-1 gap-4">
            <For each={response().data.data.posts}>
              {(post) => (
                <li>
                  <PostCard {...post} refetch={refetch} />
                </li>
              )}
            </For>
          </ul>
        </div>
      </Match>
    </Switch>
  );
}
