const { CourseEntity } = require("../DataServices/model/models");
const { get } = require("../routes/auth");

exports.postCourse = async (req, res, next) => {
  console.log(req.body);
  const name = req.body.name;
  const description = req.body.description;

  await CourseEntity.findOne({ where: { name: name } })
    .then(async (courseDoc) => {
      if (courseDoc) {
        return res.send("Course exist already");
      }
      await CourseEntity.create({
        name: name,
        description: description,
        isActive: false,
      }).then((result) => {
        res.send("COURSE CREATED");
      });
    })
    .catch((err) => console.log(err));
};

exports.postUpdateCourse = async (req, res, next) => {
  const courseId = req.params.id;
  const updatedName = req.body.name;
  const updatedDescription = req.body.description;

  await  CourseEntity.findOne({ where: { id: courseId } })
    .then(async (courseDoc) => {
      if (!courseDoc) {
        return res.send("COURSE NOT FOUND");
        }
      await  courseDoc
        .update({
          name: updatedName,
          description: updatedDescription,
          isActive: false,
        })
        .then((result) => {
          res.send("COURSE UPDATED SUCCESFULLY");
        });
    })
    .catch((err) => console.log(err));
};

exports.getCourse = async (req, res, next) => {
  const getActive = req.query.getActive ? true : false;

  await CourseEntity.findAll()
    .then(async (coursesDoc) => {
      if (getActive) {
        const courses = await coursesDoc.filter((c) => {
          if (c.isActive) {
            return c;
          }
        });
        return res.send(courses);
      }
      return res.send(coursesDoc);
    })
    .catch((err) => console.log(err));
};

exports.getOneCourse = async (req, res, next) => {
  const courseId = req.params.id;

  await CourseEntity.findOne({ where: { id: courseId } }).then((courseDoc) => {
    if (!courseDoc) {
      return res.send("NO COURSE FOUND");
    }
    return res.send(courseDoc);
  });
};
