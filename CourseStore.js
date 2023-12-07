import {create} from 'zustand';
// import {devtools, persist} from 'zustand/middleware'

// const CourseStore = (set) => ({
//     courses: [],
//     addCourse: (course) => {
//         set((state)=> ({
//          courses: [course,...state.courses],
//         }))
//     },
//     removeCourse: (courseId) => {
//         set((state)=>({
//             courses: state.courses.filter((c)=> c.id !== courseId)
//         }))
//     },
//     toggleCourseStatus: (courseId)=> {
//        set((state)=>({
//         courses: state.courses.map((course)=>course.id === courseId ? {...course, completed: !course.completed} : course)
//        }))
//     }
// })

// const useCourseStore = create(
//     devtools(
//         persist(CourseStore, {
//             name: "courses",
//         })
//     )
// )
// export default useCourseStore;

const useDataStore = create((set) => ({
    users: [],
    addUser: (user) => {
      set((state) => ({
       users: [user, ...state.users]
      }));
    },
    removeUser: (userId) => {
      set((state)=>({
          users: state.users.filter((user)=>user.id !== userId)
      }))
  },

  
  }));
//   const useDataStore = create(
//     devtools(
//         persist(DataStore, {
//             name: "users",
//         })
//     )
// )
export default useDataStore