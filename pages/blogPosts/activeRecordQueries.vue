<template>
  <article>
    <h1>Rails Active Record Queries - A Cheatsheet</h1>

    <section>
      <h2>TLDR</h2>
      <ul>
        <li>Prefer joins over includes for inner join (better perfomance)</li>
        <li>Use scopes within models, chain them together with <code>merge()</code></li>
      </ul>
    </section>

    <hr />

    <!-- Simple Joins -->
    <section>
      <h2>Simple Joins</h2>
      <pre><code>
        class Person < ActiveRecord::Base
          belongs_to :role
        end

        class Role < ActiveRecord::Base
          has_many :people
        end

        Person.all
          .joins(:role)
          .where(roles: { billable: true })

        SELECT "people".*
        FROM "people"
        INNER JOIN "roles"
          ON "roles.id" = "people"."role_id"
        WHERE "roles"."billable" = true;
      </code></pre>
    </section>

    <section>
      <h2>Keep Concerns Separate(same sql, more clear)</h2>
      <pre><code>
        class Role < ActiveRecord::Base
          def self.billable
            where(billable: true)
          end
        end
        Person.joins(:role).merge(Role.billable)
      </code></pre>

      <h3>even better</h3>
      <pre><code>
        class Person < ActiveRecord::Base
          def self.billable
            joins(:role).merge(Role.billable)
          end
        end

        Person.billable
      </code></pre>
    </section>

    <hr />

    <!-- Nested Joins -->
    <section>
      <h2>Nested joins</h2>
      <code>
        Event.joins(:store).where(stores: {retailer_id: 2})
      </code>
      <p>or</p>
      <code>Event.joins(:store => :retailer).where(stores: {retailer: {id: 2}})</code>
    </section>

    <hr />

    <!-- Joins Vs Includes Vs Preload -->
    <section>
      <h2>Join Vs Includes Vs Preload</h2>
      <h3>Joins</h3>
      <ul>
        <li>
          gets only the requested records, doing whatever joins need to happen to ensure only the requested records are fetched
          <p>ex <code>User.joins(:addresses).where("addresses.country = ?", "Poland")</code></p>
        </li>
        <li>
          Inner Join - only fetches users, not addresses
        </li>
      </ul>

      <h3>Includes</h3>
      <ul>
        <li>will eager load when necessary, using INNER JOINS.  ex. <code>User.joins(:addresses).where("addresses.country = ?", "Poland").includes(:addresses)</code></li>
        <li>fetches any user with a Poland address, and their Poland address.  If they have another address, that won’t be fetched</li>
      </ul>

      <h3>Preload</h3>
      <ul>
        <li>will eager load using OUTER JOINS.  ex. <code> User.joins(:addresses).where("addresses.country = ?", "Poland").preload(:addresses)</code></li>
        <li>fetches all users with a Poland address, and preloads all addresses for those users</li>
      </ul>
    </section>

    <hr />
    <!--- scopes -->
    <section>
      <h2>Using Scopes</h2>
      <p class="instruction">
        The following is bad because <code>Time.now</code> would be always the time when the class
        was loaded. You might not even spot the bug in development because classes are automatically
        reloaded for you after saving changes.
      <p>
      <code>scope :from_the_past, where("happens_at <= ?", Time.now)</code>

      <p class="instruction">The following is better - the method will run each time it's called</p>
      <code>scope :from_the_past, -> { where("happens_at <= ?", Time.now) }</code>

      <p class="instruction">Alternately, use a method instead of a scope:</p>
      <pre><code>
        def self.from_the_past
          where("happens_at <= ?", Time.now)
        end
      </code></pre>
    </section>

    <section>
      <h3>Links for Further Reading</h3>
      <ul>
        <li><a href="https://blog.arkency.com/2013/12/rails4-preloading/">Eager Loading, preloading: Arkency</a></li>
        <li><a href="https://medium.com/rubyinside/active-records-queries-tricks-2546181a98dd">Merging Queries/Scopes: Medium</a> </li>
      </ul>
    </section>

  </article>
</template>

<script>
  export default {
    name: "activeRecordQueries"
  };
</script>

<style scoped>

  article {
    padding: 10px;
  }

  ul {
    /* list-style: none; */
    padding: 5px;
  }

  section {
    padding: 10px;
    text-align: left;
  }

  code {
    margin: 5px;
    background-color: #eee;
    font-size: 12px;
    text-align: left;
    overflow: scroll;
  }
  pre {
    margin: 10px;
    display: block;
    background-color: #eee
  }

  .instruction {
    padding: 5px;
    margin-top: 10px;
  }
</style>
