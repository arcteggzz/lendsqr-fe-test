import React, { useContext, useEffect, useState } from "react";
import SingleTableData from "./SingleTableData";
import styles from "./UserTableInfo.module.scss";
import { UserProps, User } from "../../../utils/Users.types";
import { AppContext } from "../../../context/AppContext";

const UserTableInfo = (props: UserProps) => {
  // const table = [
  //   {
  //     createdAt: "1989-12-27T03:44:22.522Z",
  //     orgName: "labore-dolor-et",
  //     userName: "Tega",
  //     email: "Maverick.Hyatt83@gmail.com",
  //     phoneNumber: "(553) 208-0727 x31321",
  //     lastActiveDate: "2099-02-28T23:17:40.013Z",
  //     profile: {
  //       firstName: "Darian",
  //       lastName: "Rolfson",
  //       phoneNumber: "494-278-0946",
  //       avatar:
  //         "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
  //       gender: "Male",
  //       bvn: "815809412",
  //       address: "Gusikowski Locks",
  //       currency: "NGN",
  //     },
  //     guarantor: {
  //       firstName: "Celine",
  //       lastName: "Monahan",
  //       phoneNumber: "1-482-227-3654 x71086",
  //       gender: "Male",
  //       address: "O'Hara Centers",
  //     },
  //     accountBalance: "496.00",
  //     accountNumber: "GWQUSEH1",
  //     socials: {
  //       facebook: "@lendsqr",
  //       instagram: "@lendsqr",
  //       twitter: "@lendsqr",
  //     },
  //     education: {
  //       level: "Bsc",
  //       employmentStatus: "Employed",
  //       sector: "FinTech",
  //       duration: "2 Years",
  //       officeEmail: "Edna4@yahoo.com",
  //       monthlyIncome: ["128.57", "118.07"],
  //       loanRepayment: "122.47",
  //     },
  //     id: "1",
  //   },
  //   {
  //     createdAt: "1923-12-27T03:44:22.522Z",
  //     orgName: "labore-dolor-et",
  //     userName: "Margaret",
  //     email: "Maverick.Hyatt83@gmail.com",
  //     phoneNumber: "(553) 208-0727 x31321",
  //     lastActiveDate: "2099-02-28T23:17:40.013Z",
  //     profile: {
  //       firstName: "Darian",
  //       lastName: "Rolfson",
  //       phoneNumber: "494-278-0946",
  //       avatar:
  //         "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
  //       gender: "Male",
  //       bvn: "815809412",
  //       address: "Gusikowski Locks",
  //       currency: "NGN",
  //     },
  //     guarantor: {
  //       firstName: "Celine",
  //       lastName: "Emeka",
  //       phoneNumber: "1-482-227-3654 x71086",
  //       gender: "Male",
  //       address: "O'Hara Centers",
  //     },
  //     accountBalance: "496.00",
  //     accountNumber: "GWQUSEH1",
  //     socials: {
  //       facebook: "@lendsqr",
  //       instagram: "@lendsqr",
  //       twitter: "@lendsqr",
  //     },
  //     education: {
  //       level: "Bsc",
  //       employmentStatus: "Employed",
  //       sector: "FinTech",
  //       duration: "2 Years",
  //       officeEmail: "Edna4@yahoo.com",
  //       monthlyIncome: ["128.57", "118.07"],
  //       loanRepayment: "122.47",
  //     },
  //     id: "1",
  //   },
  //   {
  //     createdAt: "2072-12-27T03:44:22.522Z",
  //     orgName: "labore-dolor-et",
  //     userName: "Wilburn.Rice",
  //     email: "Maverick.Hyatt83@gmail.com",
  //     phoneNumber: "(553) 208-0727 x31321",
  //     lastActiveDate: "2099-02-28T23:17:40.013Z",
  //     profile: {
  //       firstName: "Darian",
  //       lastName: "Rolfson",
  //       phoneNumber: "494-278-0946",
  //       avatar:
  //         "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
  //       gender: "Male",
  //       bvn: "815809412",
  //       address: "Gusikowski Locks",
  //       currency: "NGN",
  //     },
  //     guarantor: {
  //       firstName: "Celine",
  //       lastName: "Monahan",
  //       phoneNumber: "1-482-227-3654 x71086",
  //       gender: "Male",
  //       address: "O'Hara Centers",
  //     },
  //     accountBalance: "496.00",
  //     accountNumber: "GWQUSEH1",
  //     socials: {
  //       facebook: "@lendsqr",
  //       instagram: "@lendsqr",
  //       twitter: "@lendsqr",
  //     },
  //     education: {
  //       level: "Bsc",
  //       employmentStatus: "Employed",
  //       sector: "FinTech",
  //       duration: "2 Years",
  //       officeEmail: "Edna4@yahoo.com",
  //       monthlyIncome: ["128.57", "118.07"],
  //       loanRepayment: "122.47",
  //     },
  //     id: "1",
  //   },
  //   {
  //     createdAt: "2000-12-27T03:44:22.522Z",
  //     orgName: "labore-dolor-et",
  //     userName: "Wilburn.Rice",
  //     email: "Maverick.Hyatt83@gmail.com",
  //     phoneNumber: "(553) 208-0727 x31321",
  //     lastActiveDate: "2099-02-28T23:17:40.013Z",
  //     profile: {
  //       firstName: "Darian",
  //       lastName: "Rolfson",
  //       phoneNumber: "494-278-0946",
  //       avatar:
  //         "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
  //       gender: "Male",
  //       bvn: "815809412",
  //       address: "Gusikowski Locks",
  //       currency: "NGN",
  //     },
  //     guarantor: {
  //       firstName: "Celine",
  //       lastName: "Monahan",
  //       phoneNumber: "1-482-227-3654 x71086",
  //       gender: "Male",
  //       address: "O'Hara Centers",
  //     },
  //     accountBalance: "496.00",
  //     accountNumber: "GWQUSEH1",
  //     socials: {
  //       facebook: "@lendsqr",
  //       instagram: "@lendsqr",
  //       twitter: "@lendsqr",
  //     },
  //     education: {
  //       level: "Bsc",
  //       employmentStatus: "Employed",
  //       sector: "FinTech",
  //       duration: "2 Years",
  //       officeEmail: "Edna4@yahoo.com",
  //       monthlyIncome: ["128.57", "118.07"],
  //       loanRepayment: "122.47",
  //     },
  //     id: "1",
  //   },
  //   {
  //     createdAt: "2030-12-27T03:44:22.522Z",
  //     orgName: "labore-dolor-et",
  //     userName: "Wilburn.Rice",
  //     email: "Maverick.Hyatt83@gmail.com",
  //     phoneNumber: "(553) 208-0727 x31321",
  //     lastActiveDate: "2099-02-28T23:17:40.013Z",
  //     profile: {
  //       firstName: "Darian",
  //       lastName: "Rolfson",
  //       phoneNumber: "494-278-0946",
  //       avatar:
  //         "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
  //       gender: "Male",
  //       bvn: "815809412",
  //       address: "Gusikowski Locks",
  //       currency: "NGN",
  //     },
  //     guarantor: {
  //       firstName: "Celine",
  //       lastName: "Monahan",
  //       phoneNumber: "1-482-227-3654 x71086",
  //       gender: "Male",
  //       address: "O'Hara Centers",
  //     },
  //     accountBalance: "496.00",
  //     accountNumber: "GWQUSEH1",
  //     socials: {
  //       facebook: "@lendsqr",
  //       instagram: "@lendsqr",
  //       twitter: "@lendsqr",
  //     },
  //     education: {
  //       level: "Bsc",
  //       employmentStatus: "Employed",
  //       sector: "FinTech",
  //       duration: "2 Years",
  //       officeEmail: "Edna4@yahoo.com",
  //       monthlyIncome: ["128.57", "118.07"],
  //       loanRepayment: "122.47",
  //     },
  //     id: "1",
  //   },
  //   {
  //     createdAt: "2011-12-27T03:44:22.522Z",
  //     orgName: "labore-dolor-et",
  //     userName: "Wilburn.Rice",
  //     email: "Maverick.Hyatt83@gmail.com",
  //     phoneNumber: "(553) 208-0727 x31321",
  //     lastActiveDate: "2099-02-28T23:17:40.013Z",
  //     profile: {
  //       firstName: "Darian",
  //       lastName: "Rolfson",
  //       phoneNumber: "494-278-0946",
  //       avatar:
  //         "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
  //       gender: "Male",
  //       bvn: "815809412",
  //       address: "Gusikowski Locks",
  //       currency: "NGN",
  //     },
  //     guarantor: {
  //       firstName: "Celine",
  //       lastName: "Monahan",
  //       phoneNumber: "1-482-227-3654 x71086",
  //       gender: "Male",
  //       address: "O'Hara Centers",
  //     },
  //     accountBalance: "496.00",
  //     accountNumber: "GWQUSEH1",
  //     socials: {
  //       facebook: "@lendsqr",
  //       instagram: "@lendsqr",
  //       twitter: "@lendsqr",
  //     },
  //     education: {
  //       level: "Bsc",
  //       employmentStatus: "Employed",
  //       sector: "FinTech",
  //       duration: "2 Years",
  //       officeEmail: "Edna4@yahoo.com",
  //       monthlyIncome: ["128.57", "118.07"],
  //       loanRepayment: "122.47",
  //     },
  //     id: "1",
  //   },
  //   {
  //     createdAt: "2022-12-27T03:44:22.522Z",
  //     orgName: "labore-dolor-et",
  //     userName: "Wilburn.Rice",
  //     email: "Maverick.Hyatt83@gmail.com",
  //     phoneNumber: "(553) 208-0727 x31321",
  //     lastActiveDate: "2099-02-28T23:17:40.013Z",
  //     profile: {
  //       firstName: "Darian",
  //       lastName: "Rolfson",
  //       phoneNumber: "494-278-0946",
  //       avatar:
  //         "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
  //       gender: "Male",
  //       bvn: "815809412",
  //       address: "Gusikowski Locks",
  //       currency: "NGN",
  //     },
  //     guarantor: {
  //       firstName: "Celine",
  //       lastName: "Monahan",
  //       phoneNumber: "1-482-227-3654 x71086",
  //       gender: "Male",
  //       address: "O'Hara Centers",
  //     },
  //     accountBalance: "496.00",
  //     accountNumber: "GWQUSEH1",
  //     socials: {
  //       facebook: "@lendsqr",
  //       instagram: "@lendsqr",
  //       twitter: "@lendsqr",
  //     },
  //     education: {
  //       level: "Bsc",
  //       employmentStatus: "Employed",
  //       sector: "FinTech",
  //       duration: "2 Years",
  //       officeEmail: "Edna4@yahoo.com",
  //       monthlyIncome: ["128.57", "118.07"],
  //       loanRepayment: "122.47",
  //     },
  //     id: "1",
  //   },
  // ];
  const { currentPage, itemsPerPage } = useContext(AppContext);
  const appContext = useContext(AppContext);
  const [usersToDisplay, setUsersToDisplay] = useState<User[]>([]);
  const allUsers = props.users;

  const filterUsers = () => {
    const filteredUsers = allUsers.slice(
      currentPage * itemsPerPage - itemsPerPage,
      currentPage * itemsPerPage
    );
    setUsersToDisplay(filteredUsers);
    console.log(filteredUsers);
  };
  useEffect(() => {
    filterUsers();
  }, [usersToDisplay]);

  return (
    <>
      <div className={styles.UserTableInfo}>
        {usersToDisplay.map((user, index) => {
          return (
            <SingleTableData
              user={user}
              key={`${user.userName}${user.createdAt}${index}`}
              id={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default UserTableInfo;
