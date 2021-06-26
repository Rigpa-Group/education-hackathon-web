import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {Field, Form, Formik} from 'formik';
import {Avatar, Container, Grid} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import {TextField} from 'formik-material-ui';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {Answer} from './Answer';
import * as Yup from 'yup';
import {courseQuestionsApi} from '../../../../../../services/CourseServices';
import {useSnackbar} from 'notistack';
import {Notify, setProps} from '../../../../../../shared/components/notification/Notification';
import {avatarTruncate, truncate} from '../../../../../../shared/functions/TextTruncate';

const useStyles = makeStyles((theme) => ({
  titleQuestion: {
    fontSize: 15,
    fontWeight: 700,
    paddingTop: '5%',
    paddingBottom: '2%'
  },
  people: {
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,

  },
  lernerName: {
    fontSize: 18,
    fontWeight: 700,
    paddingLeft: 10
  },
  questionTitle: {
    fontSize: 15,
    fontWeight: 600,
    paddingLeft: 10
  },
  inlineFlex: {
    display: 'inline',
    paddingLeft: 10
  },
  questionDetail: {
    fontSize: 15,
    paddingLeft: 10
  },
  avaterCharacter: {
    fontSize: 30,
    textTransform: 'capitalize',
  },
  viewMore: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
}));

const validationSchema = Yup.object().shape({
  question: Yup.string().required('Field is required'),
  description: Yup.string().required('Field is required'),
});

export default function QuestionAndAnswer({course, unit, handleAction}) {
  const classes = useStyles();
  const snackbar = useSnackbar();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState({});

  useEffect(() => {
    setProps(snackbar);
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

  const questionDetail = (data) => {
    setQuestion(data);
    setOpen(!open);
  };

  const handleActionAnswer = () => {
    setOpen(false);
  }

  const handleSubmitQuestion = (values, {setSubmitting, resetForm}) => {
    courseQuestionsApi('post', course?.id, unit?.id, {question: {...values}}).then(response => {
      setSubmitting(false);
      handleAction(true);
      setShow(!show);
      Notify('Question uploaded successfully', 'success');
      resetForm();
    }).catch(err => {
      setSubmitting(false);
      Notify(err, 'error');
    });
  };

  return (
    <React.Fragment>
      {!open ?
        <div>
          <div>
            <Button onClick={() => handleShow()} variant={'contained'} color={'primary'} style={{marginBottom: 20}}>
              Ask a question
            </Button>
            {show &&
            <Formik initialValues={{question: '', description: ''}} onSubmit={handleSubmitQuestion}
                    validationSchema={validationSchema}>
              {({
                  handleChange,
                  handleBlur,
                  values, errors,
                  ...formik
                }) => (
                <Form>
                  <Grid container>
                    <Grid item lg={8} xs={12}>
                      <Field component={TextField} variant="outlined" name="question" label="Question?" size="small"
                             fullWidth/>
                    </Grid>
                    <Grid item lg={8} xs={12}>
                      <Field component={TextareaAutosize} color={'primary'} aria-label="minimum height" rowsMin={5}
                             placeholder="Question Description..." name="description"
                             onChange={(e) => formik.setFieldValue('description', e?.target?.value)}
                             style={{width: '96%', padding: 10, marginTop: 15, borderColor: '#c4c4c4'}}/>
                    </Grid>
                    <Grid item lg={8} xs={12}>
                      <Button variant="contained" color="primary" type="submit">Add Questions</Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>}
          </div>
          <div>
            <Typography className={classes.titleQuestion}>
              Questions in this course ({unit?.questions_attributes?.length})
            </Typography>
          </div>
          <Divider/>
          {unit?.questions_attributes?.length > 0 && unit?.questions_attributes?.map(question => (
            <Container className={classes.people} key={question?.id} onClick={() => questionDetail(question)}>
              <Avatar style={{width: 60, height: 60}}>
                <span
                  className={classes.avaterCharacter}>
                  {avatarTruncate(question?.user?.profile_attributes?.first_name, 1)}
                </span>
              </Avatar>
              <div className={classes.inlineFlex}>
                <Typography className={classes.lernerName}>
                  {question?.user?.profile_attributes?.first_name || 'Edu'} {question?.user?.profile_attributes?.last_name || 'User'}
                </Typography>
                <Typography className={classes.questionTitle}>
                  {question?.question}
                </Typography>
                <Typography className={classes.questionDetail}>
                  {truncate(question?.description, 200)}
                </Typography>
              </div>
            </Container>
          ))}
          <Divider/>
          {unit?.questions_attributes?.length > 6 &&
          <div className={classes.viewMore}>
            <Button>
              View more
            </Button>
          </div>}
        </div> : <Answer question={question} course={course} unit={unit} handleAction={handleActionAnswer}/>}
    </React.Fragment>
  );
}
