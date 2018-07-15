### Goals
- be able to rearrange rows with ease
- support different row types (nested vs not)
- be able to specific varying combinations of plans in different instance; only show columns for those plans
- limit repeated content across components
- super simple, repeatable jsx render sections that are easy to use to put together table rows and change out the content to wahtever we want.

### Sample Directories

#### /components/
These are example presentational components that are used to construct the plans table. They mostly used style components to print out react children into containers. The implementation of the components can completely change with time. What matters is the interface, which allows them to be used to compose a table using any content matching the design. The components cover the use cases of single rows as well as muliple levels of nesting in rows / cells that span multiple rows like this:
 ______  ___________
|      |
|      |____________
|      |
|______|____________


#### /content/
The `PlansTable.jsx` itself and individual content rows live in this directory. These components purposely incorporate content. The row components use the table presenational components to format themselves. Inside each row component, there will be data structure that consists of only the content for that row. The anatomy of that structure should be consistent across all content components. And example is `PrivacyRow.jsx`. For rows that display lists in each column (most), there would be a default array of translated copy. Adding fields to the object will override this default list for each plan type. The list as a whole is exposed as props just in case a parent component wants to completely alter it.